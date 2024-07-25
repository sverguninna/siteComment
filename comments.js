const buttonGetComment = document.querySelector('.comments-button-send')
const inputName =document.querySelector('.create-name')
const inputText =document.querySelector('.create-text')
const  commentsList =document.querySelector('.comments-list')
let userComments = [
    {
        userName: 'Соня',
        userComment: 'не важно что',
        userNumLike:0,
        date: getDateNow(), 
        time: getTimeNow(),
        id: 0,
        like: false,
        likeİmg:'./img/passive2.png'
    },
    {
        userName: 'Nika',
        userComment: 'hello',
        userNumLike:0,
        date: getDateNow(), 
        time: getTimeNow(),
        id: 1,
        like: false,
        likeİmg:'./img/passive2.png'
    }
];

buttonGetComment.addEventListener('click', pushComment)

getComment() 

function getComment(e) {
    commentsList.innerHTML=''
    userComments.map((comment)=>{
        commentsList.innerHTML += ` <li class="comments">
                        <div class="comments-box-left">
                            <h1 class="comments-user-name"> ${comment.userName} </h1>
                            <p class ="comments-user-text" >${comment.userComment} </p>
                        </div>
                         <div class="comment-box-right">
                           <div class="like-box">
                             <img class="comments-user-like" src="${comment.like ? './img/free-icon-like-2340079.png' : './img/passive2.png'} " data-id="${comment.id}" alt="" >
                             <h2 class="comments-user-like-number">  ${comment.userNumLike} </h2>
                             <button type="button" data-id="${comment.id}" class="comment-button-delte">Удалить</button>
                           </div>
                           <div class="comment-data-box">
                              <p class="comments-user-data"> ${comment.date} </p>
                              <p class="comments-user-time"> ${comment.time} </p>
                           </div>
                         </div>
                     </li>`
     
    })
    updateEvent()
   
}
function deleteComment(e) {
    let question = confirm('Вы хотите удалмть коментарий ')
    if (question) {
        let id = Number(e.target.dataset.id);
        userComments =  userComments.filter((comment)=> comment.id !== id)
        console.log(userComments);
        getComment() 
    }
}
function getDateNow(params) {
    let date = new Date()
    return `${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`
}
function getTimeNow(){
    let date = new Date()
    return`${date.getHours()}:${date.getMinutes()}`
}
function pushComment() {
    if (inputName.value !== '' && inputText.value !=='') {
        userComments.push({
        userName: inputName.value,
        userComment: inputText.value,
        userNumLike: 0,
        date: getDateNow(), 
        time: getTimeNow(),
        id: Math.random(),
        like: false,
        likeİmg:'./img/passive2.png' 
        })
        getComment() 
        clearForm()
    }
   return
}

function clearForm(){
    inputName.value =''
    inputText.value = ''
}

function addLike(e) {
    let id = Number(e.target.dataset.id) 
    userComments.forEach((comment)=>{
        if (comment.id === id && comment.like === false) {
            comment.like = !comment.like
            comment.userNumLike += 1 
        } else if (comment.id === id && comment.like){
            comment.like = !comment.like
            comment.userNumLike -= 1 
           
        }
        getComment()
    })

}
function updateEvent() {
    document.querySelectorAll('.comment-button-delte')
    .forEach((but)=>but.addEventListener('click', deleteComment))
    document.querySelectorAll('.comments-user-like')
    .forEach((like)=> like.addEventListener('click', addLike))
}
 