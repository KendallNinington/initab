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
    icon.setAttribute('src' , 'images/facebook_fav.png');
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
    m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
    apmpm = h >=12 ? 'Pm' : 'Am';
var time = document.createElement('span');
time.classList.add('timer');
c_time.appendChild(time)
const timer = document.querySelector('.timer');
timer.innerHTML =  h + ":" + m + " " + apmpm;
function updateTime(){
    var d = new Date();
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
    apmpm = h >=12 ? 'Pm' : 'Am';
    timer.innerHTML =  h + ":" + m + " " + apmpm;
}
setInterval(updateTime , 1000)

