let input=prompt('Paste the problems to import');
let problems=input.split(',');
document.body.innerHTML='';
problems.forEach(
id=>buttonFromId(id)
);

function buttonFromId(problemId){
let link=`https://codeforces.com/contest/${parseInt(problemId)}/problem/${problemId.replace(/^\d+/,'')}`;
let htmlTemplate=`<a href='${link}'> Problem ${problemId} </a><br><br>`;

document.body.innerHTML+=htmlTemplate;
}