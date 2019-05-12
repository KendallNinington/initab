fetch("data.json")
.then(res => res.json())
.then(data => {
    for(var i = 0 ; i<data.length ; i++){
        var li = document.createElement('li');
        li.classList.add('post');
        var title = document.createElement('span');
        title.classList.add("title");
        title.textContent = data[i].title
        var author = document.createElement('span');
        author.classList.add('author')
        author.textContent= "Posted By: ";
        var spanNs = document.createElement('span');
        author.appendChild(spanNs);
        spanNs.textContent = "u/" +  data[i].author 
        var score = document.createElement('div');
        score.classList.add('reddit_score');
        var span_score = document.createElement('span');
        span_score.textContent = "Reddit Score : " + data[i].rate;
        score.appendChild(span_score)
        document.querySelector('.posts').appendChild(li);
        li.appendChild(title);
        li.appendChild(score)
        li.appendChild(author);
    }
    
})
fetch("history.json")
.then(data => data.json())
.then(json => {
    for(var i = 0 ; i <json.length;i++){
    var title = json[i].title;
    var li = document.createElement('li');
    var icon = document.createElement('img');
    var link = document.createElement('a');
    var time = document.createElement('span');
    time.classList.add('time');
    link.setAttribute('href' , '#');
    icon.setAttribute('src' , 'images/chingu_logo.png');
    li.appendChild(icon);
    li.appendChild(link);
    li.appendChild(time);
    time.textContent= json[i].time
    link.textContent = title.substring(0,65) + "...";
    document.querySelector('.browser_hs').appendChild(li)
    }
})

const c_time = document.getElementById('time');
var d = new Date();
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
var time = document.createElement('span');
time.classList.add('timer');
c_time.appendChild(time)
const timer = document.querySelector('.timer');
timer.innerHTML =  h + ":" + m + " ";
var date = document.createElement('span');
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth()
var year = currentDate.getFullYear()
var ico = document.createElement('i');
var ico_del = document.createElement('i');
var message = document.createElement('p');
var message_hide = document.createElement('a');
message_hide.setAttribute('href' , "javascript:hide()")
message_hide.classList.add("hide_link");
message_hide.textContent = "got it! Don't show me again";
function hide(){
    document.querySelector('.hide_link').style.display='none'
    document.querySelector('.message').style.display='none'
 }
ico.classList.add('fas');
ico.classList.add('fa-question-circle');
ico_del.classList.add('fas');
ico_del.classList.add('fa-times-circle');
message.textContent = `did you know you can add CUSTOM LINKS to display in this section ?
open the settings panel and add the urls of your favorite sites the 'CUSTOM LINKS' textarea`;
message.classList.add('message');
date.classList.add('date');
date.textContent=months[month] + " " + day + ", " + year;
c_time.appendChild(date)
message.prepend(ico)
message_hide.prepend(ico_del)
c_time.appendChild(message)
c_time.appendChild(message_hide)
function updateTime(){
    var d = new Date();
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
    timer.innerHTML =  h + ":" + m + " ";
}
setInterval(updateTime , 1000)
fetch("github_errors.json")
.then(data => data.json())
.then(err => {
    for(i = 1 ; i<err.length ; i++){
        const repos = document.querySelector('.repos');
        const li = document.createElement('li');
        li.classList.add('error');
        const repo_name = document.createElement('span');
        const err_num = document.createElement('span');
        const error = document.createElement('span');
        repo_name.textContent = "Repo: " + err[i].title;
        err_num.textContent = "issue " + "#" + err[i].number;
        error.textContent = err[i].error;
        li.appendChild(repo_name);
        li.appendChild(err_num);
        li.appendChild(error);
        repos.appendChild(li)
    }
})