var count = 0;
var multiplesOfThree = [];

`Turing Group and ServerCentral have recently teamed up to offer companies an easier and more manageable path into the cloud.

 

Turing Group is hiring a Full Stack Developer to work out of Turing Group’s corporate headquarters in Chicago, IL.

 

Job Scope:

You are a full-stack software engineer with a passion for problem solving and puzzles. You are curious, collaborative, and get excited about tackling the hard problems. You like to tinker, explore new technologies, and challenge the status quo.

 

Understanding and supporting clients is your primary responsibility, as making THEM effective makes YOU effective! Your deep understanding of software development, combined with your emerging knowledge of DevOps and Cloud services, will make our rapidly expanding team better and more well-rounded.

 

The ideal candidate has the following qualifications:

    Deep understanding of front-end JavaScript development using libraries such as React, Angular, etc.

    Basic understanding of AWS Services, such as Lambda, API Gateway, CodeCommit, CodeBuild, CodeDeploy, and CodePipline

    Expert in CSS/HTML5

    Deep understanding of development using either Python, Node, or Ruby

    Comfortable and excited about interacting with clients and end users

    Expertise in developing under Linux or OS X

    Desire to pursue AWS Development Certifications toward expert-level achievement

    Familiarity with SQL and NOSQL databases

    Experience with orchestration tools such as Ansible, Salt, Chef, or Puppet

    Experience with Vagrant or Docker  

    Familiarity with continuous integration systems such as Jenkins or Bamboo

    Familiarity with tracking systems such as JIRA

    Ability to work independently and collaboratively – self-motivated, accountable, and able to offer up new ideas

    Critical thinking, troubleshooting, and problem-solving talents

    A balance of technical, business, and social/emotional intelligence

    Passion about learning coupled with an ability to learn new skills quickly`.replace(/[^a-zA-Z0-9\s]/g, '').split(" ").forEach(function(element){
    if(element.length % 3 == 0 && element.length != 0){
        count++;
        multiplesOfThree.push(element.length);
        multiplesOfThree.sort();
    }
});

modeArray = [];
for (let i = 0; i < multiplesOfThree.length; i ++) {
    let currentValue = multiplesOfThree[i];
    let tempObject;

    if (find(currentValue)){
        tempObject = find(currentValue);
        tempObject.count++;
    }
    else {
        tempObject = {
            value: currentValue,
            count: 1
        }
        modeArray.push(tempObject);        
    }
}
console.log(findMode());

function findMode(){
    let maxOccurrence = { count: -1 };
    for (let temp of modeArray) {
        if(temp.count > maxOccurrence.count){
            maxOccurrence = temp;
        }
    }
    if (maxOccurrence.count == null)
        return null;
    else
        return maxOccurrence;
    
}

function find(value) {
    for (let modeObject of modeArray){
        if( modeObject.value == value){
            return modeObject;
        }
    }
    return false;
}