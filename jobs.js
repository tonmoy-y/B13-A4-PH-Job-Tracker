console.log("Job Tracker Connected");

let totalJobsElement = document.getElementById('job-container');
let totalJobsArray = Array.from(totalJobsElement.children);

let interviewCounter = 0;
let rejectedCounter = 0;

console.log(totalJobsArray);

let totalJobStatus = [];

let rejectedContainer = document.getElementById('rejected-container');
let interviewContainer = document.getElementById('interview-container');

const jobNumbers = document.getElementsByClassName('total-job-number');
const interviewNumbers = document.getElementsByClassName('total-interview-number');
const rejectedNumbers = document.getElementsByClassName('total-rejected-number');
const btnAll = document.getElementById('btn-all');
const btnInterview = document.getElementById('btn-interview');
const btnRejected = document.getElementById('btn-rejected');



for(let i=0; i< totalJobsArray.length; i++) {
    totalJobStatus.push({
        job: totalJobsArray[i],
        isInterview : false,
        isRejected: false
    })
}

console.log(totalJobStatus);






btnAll.addEventListener('click', function (){
    totalJobsElement.classList.remove('hidden');
    totalJobsElement.innerHTML= '';
        for(let i=0; i <totalJobStatus.length; i++) {
            totalJobsElement.appendChild(totalJobStatus[i].job);
        }
        showNoJobs(totalJobStatus.length);
        updateText();
}
);

btnInterview.addEventListener('click', function() {
    totalJobsElement.classList.add('hidden');
    interviewContainer.classList.remove('hidden');
    rejectedContainer.classList.add('hidden');

    let cnt = 0;
        for(let i=0; i< totalJobStatus.length; i++) {
        if(totalJobStatus[i].isInterview === true) {
            cnt++;
        interviewContainer.appendChild(totalJobStatus[i].job);
        }

    }
    showNoJobs(cnt);
    updateText();
});


btnRejected.addEventListener('click', function() {
    totalJobsElement.classList.add('hidden');
    rejectedContainer.classList.remove('hidden');
    interviewContainer.classList.add('hidden');
    let cnt = 0;
        for(let i=0; i< totalJobStatus.length; i++) {
        if(totalJobStatus[i].isRejected === true) {
            cnt++;
            rejectedContainer.appendChild(totalJobStatus[i].job);
        }

    }
    showNoJobs(cnt);
    updateText();
});





function deleteJob(id) {
    for(let i=0; i< totalJobStatus.length; i++) {
        if(totalJobStatus[i].job.id === id) {
            document.getElementById(id).remove();
            if(totalJobStatus[i].isInterview) {
                interviewCounter--;
                
            }
                if(totalJobStatus[i].isRejected) {
                    rejectedCounter--;
                }
            totalJobStatus.splice(i, 1);
            break;
        }

    }

        if(btnAll.checked){
             showNoJobs(totalJobStatus.length);
                }
        else if(btnInterview.checked){
            showNoJobs(interviewCounter);
                }
        else if(btnRejected.checked){
            showNoJobs(rejectedCounter);
                }
        document.getElementsByClassName('total-job-number')[0].innerText = totalJobStatus.length;
        document.getElementsByClassName('total-job-number')[1].innerText = totalJobStatus.length;
        
        document.getElementsByClassName('total-interview-number')[0].innerText = interviewCounter;
        document.getElementsByClassName('total-rejected-number')[0].innerText = rejectedCounter;

        if(btnAll.checked){
            document.getElementsByClassName('total-job-number')[1].innerText = totalJobStatus.length;
                }
        else if(btnInterview.checked){
                   document.getElementsByClassName('total-interview-number')[1].innerText = interviewCounter +' of ';
                }
        else if(btnRejected.checked){
            document.getElementsByClassName('total-rejected-number')[1].innerText = rejectedCounter+' of ';
                }
updateText();
    
}

function addToInterview(id) {
 
    for(let i=0; i< totalJobStatus.length; i++) {
       
        if(totalJobStatus[i].job.id === id) {
            if(totalJobStatus[i].isInterview){
                return;
            }
            interviewCounter++;
        totalJobStatus[i].isInterview = true;
        // document.getElementById('interview-container').appendChild(totalJobStatus[i].job);
        if(totalJobStatus[i].isRejected) {
            rejectedCounter--;
            // document.getElementById('rejected-container').removeChild(totalJobStatus[i].job);
        }
            totalJobStatus[i].isRejected = false;


        document.getElementsByClassName('total-interview-number')[0].innerText = interviewCounter;
        document.getElementsByClassName('total-rejected-number')[0].innerText = rejectedCounter;


        if(btnAll.checked){
            document.getElementsByClassName('total-job-number')[1].innerText = totalJobStatus.length;
                }
        else if(btnInterview.checked){
                   document.getElementsByClassName('total-interview-number')[1].innerText = interviewCounter +' of ';
                }
        else if(btnRejected.checked){
            document.getElementsByClassName('total-rejected-number')[1].innerText = rejectedCounter+' of ';
                }

        const status = totalJobStatus[i].job.querySelector('h5');
        status.className = "text-sm font-medium";
        status.innerHTML = `
        <button class="btn btn-sm btn-outline btn-secondary" disabled>INTERVIEW</button>
        `
        break;
    }
}
       
            showNoJobs(rejectedCounter);
             
updateText();
}

function addToRejected(id) {
    
    for(let i=0; i< totalJobStatus.length; i++) {
        
        
        if(totalJobStatus[i].job.id === id) {

            if(totalJobStatus[i].isRejected){
                return;
            }
            rejectedCounter++;
            totalJobStatus[i].isRejected = true;
            if(totalJobStatus[i].isInterview) {
                interviewCounter--;
            // document.getElementById('interview-container').removeChild(totalJobStatus[i].job);
        }
             showNoJobs(interviewCounter);

        document.getElementsByClassName('total-interview-number')[0].innerText = interviewCounter;
        document.getElementsByClassName('total-rejected-number')[0].innerText = rejectedCounter;
        
        
        if(btnAll.checked){
            document.getElementsByClassName('total-job-number')[1].innerText = totalJobStatus.length;
                }
        else if(btnInterview.checked){
                   document.getElementsByClassName('total-interview-number')[1].innerText = interviewCounter +' of ';
                }
        else if(btnRejected.checked){
            document.getElementsByClassName('total-rejected-number')[1].innerText = rejectedCounter+' of ';
                }



            totalJobStatus[i].isInterview = false;
            const status = totalJobStatus[i].job.querySelector('h5');
        status.className = "text-sm font-medium";
        status.innerHTML = `
        <button class="btn btn-sm btn-outline btn-secondary" disabled>REJECTED</button>
        `
break;
        }
    }
updateText();

}

function showNoJobs(num) {
    if(num === 0) {
        document.getElementById('no-job').classList.remove('hidden');
    } else {
        document.getElementById('no-job').classList.add('hidden');
    }
}




function updateText(){

    if(btnAll.checked){
        jobNumbers[1].innerText = totalJobStatus.length + " jobs";
        interviewNumbers[1].innerText = "";
        rejectedNumbers[1].innerText = "";
    }

    else if(btnInterview.checked){
        interviewNumbers[1].innerText =
        interviewCounter + " of " + totalJobStatus.length + " jobs";

        jobNumbers[1].innerText = "";
        rejectedNumbers[1].innerText = "";
    }

    else if(btnRejected.checked){
        rejectedNumbers[1].innerText =
        rejectedCounter + " of " + totalJobStatus.length + " jobs";

        jobNumbers[1].innerText = "";
        interviewNumbers[1].innerText = "";
    }

}