console.log("Job Tracker Connected");

let deleteJobs = 0;
const totalJobElement = document.getElementsByClassName('total-job');
let totalJobs = parseInt(totalJobElement[0].innerText);
console.log(parseInt(totalJobElement[0].innerText));
const NoJobElement = document.getElementById('no-job');
console.log(NoJobElement);





function addToInterview(id) {
    let interviewJobs = [];
    showNoJob(interviewJobs.length);
}





//------------------------- delete jobs ----------------------------- 
function deleteJob(jobId) {
    const jobCard = document.getElementById(jobId);
    if (jobCard) {
        jobCard.remove();
    }
    deleteJobs++;
    let jobLeft = totalJobs - deleteJobs;
    console.log(jobLeft);
    showNoJob(jobLeft);
    totalJobElement[0].innerText = jobLeft;
    totalJobElement[1].innerText = jobLeft;
}


function showNoJob (num) {
    if(num === 0 ) {
        NoJobElement.classList.remove('hidden');
    }
}