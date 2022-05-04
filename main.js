
function createPost(stampHtml, element) {
  let textHtml = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.authorPhoto}" alt="${element.authorName}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.authorName}</div>
                    <div class="post-meta__time">${element.postDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.postText}</div>`;

  if (element.postImage) {
    textHtml += `
            <div class="post__image">
             <img src="${element.postImage}" alt="">
            </div>`;
  }

  textHtml += `<div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#${element.postId}" id="${element.postId}" data-postid="${element.postId}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter" id="#${element.postId}">
                Piace a <b id="like-counter-${element.postId}" class="js-likes-counter">${element.like}</b> persone
            </div>
        </div> 
    </div>            
</div>`;

  stampHtml.innerHTML += textHtml;
}

const containerHtml = document.querySelector(".posts-list");

let posts = [
  {
    postId: 1,
    authorName: "Marco Marchi",
    authorPhoto: "https://images.unsplash.com/photo-1641207455875-6a55841732f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    postDate: "01-15-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    postImage: "https://images.unsplash.com/photo-1641946320881-3b8442ba482a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    like: 304
  },
  {
    postId: 2,
    authorName: "Pino Pini",
    authorPhoto: "https://images.unsplash.com/photo-1641824780302-d918ddc3ba08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    postDate: "01-20-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    postImage: "https://images.unsplash.com/photo-1641924875397-5324016b96bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    like: 2405
  },
  {
    postId: 3,
    authorName: "Giorgio Giorgetti",
    authorPhoto: "https://images.unsplash.com/photo-1640952891722-d340f4f19adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    postDate: "02-10-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
      like: 60
  },
  {
    postId: 4,
    authorName: "Rosa Rossi",
    authorPhoto: "https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    postDate: "02-15-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
      like: 36
  },
  {
    postId: 5,
    authorName: "Paola Paolini",
    authorPhoto: "https://unsplash.it/300/300?image=15",
    postDate: "02-18-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    postImage: "https://unsplash.it/600/300?image=171",
    like: 202
  },
];


for (let i = 0; i < posts.length; i++) {
  let post = posts[i];
  createPost(containerHtml, post);
}


let counter = document.querySelectorAll(".js-likes-counter");
const likeButtons = document.querySelectorAll(".like-button"); 
let idLiked = []; 
for(let i=0; i< likeButtons.length; i++){ 
likeButtons[i].addEventListener("click", function (e) { e.preventDefault() 
        
        if(likeButtons[i].classList.contains('like-button--liked')){  
            posts[i].like--; 
            likeButtons[i].classList.remove('like-button--liked'); 
            idLiked.push(posts[i].postId) 
            posts[i].like++; 
            likeButtons[i].classList.add('like-button--liked'); 
        }
        counter[i].innerHTML = posts[i].like;
        });
}

