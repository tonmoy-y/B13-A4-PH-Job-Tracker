console.log("Job Tracker Connected");

let totalJobsElement = document.getElementById('job-container');
let totalJobsArray = Array.from(totalJobsElement.children);

console.log(totalJobsArray);

let totalJobStatus = [];

let rejectedContainer = document.getElementById('rejected-container');
let interviewContainer = document.getElementById('interview-container');

for(let i=0; i< totalJobsArray.length; i++) {
    totalJobStatus.push({
        job: totalJobsArray[i],
        isInterview : false,
        isRejected: false
    })
}

console.log(totalJobStatus)


document.getElementById('btn-all').addEventListener('click', function (){
    totalJobsElement.classList.remove('hidden');
    totalJobsElement.innerHTML= '';
        for(let i=0; i <totalJobStatus.length; i++) {
            totalJobsElement.appendChild(totalJobStatus[i].job);
        }
        showNoJobs(totalJobStatus.length);
}
);

document.getElementById('btn-interview').addEventListener('click', function() {
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
});


document.getElementById('btn-rejected').addEventListener('click', function() {
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
});





function deleteJob(id) {
    for(let i=0; i< totalJobStatus.length; i++) {
        if(totalJobStatus[i].job.id === id) {
            document.getElementById(id).remove();
            totalJobStatus.splice(i, 1);
            break;
        }

    }

        showNoJobs(totalJobStatus.length);

    
}

function addToInterview(id) {
 
    for(let i=0; i< totalJobStatus.length; i++) {
       
        if(totalJobStatus[i].job.id === id) {
        totalJobStatus[i].isInterview = true;
        // document.getElementById('interview-container').appendChild(totalJobStatus[i].job);
        if(totalJobStatus[i].isRejected) {
            document.getElementById('rejected-container').removeChild(totalJobStatus[i].job);
        }
            totalJobStatus[i].isRejected = false;

        const status = totalJobStatus[i].job.querySelector('h5');
        status.className = "text-sm font-medium";
        status.innerHTML = `
        <button class="btn btn-sm btn-outline btn-secondary" disabled>INTERVIEW</button>
        `
    }
}

}

function addToRejected(id) {

 for(let i=0; i< totalJobStatus.length; i++) {
    

        if(totalJobStatus[i].job.id === id) {
            totalJobStatus[i].isRejected = true;
            if(totalJobStatus[i].isInterview) {
            document.getElementById('interview-container').removeChild(totalJobStatus[i].job);
        }
            
            totalJobStatus[i].isInterview = false;
            const status = totalJobStatus[i].job.querySelector('h5');
        status.className = "text-sm font-medium";
        status.innerHTML = `
        <button class="btn btn-sm btn-outline btn-secondary" disabled>REJECTED</button>
        `

        }
    }


}

function showNoJobs(num) {
    if(num === 0) {
        document.getElementById('no-job').classList.remove('hidden');
    } else {
        document.getElementById('no-job').classList.add('hidden');
    }
}

function showNoJobByAppend() {
    const noJobElement = document.getElementById('no-job');
    noJobElement.innerHTML = `
    <div class="no-job-container bg-base-100 flex justify-center items-center py-28 rounded-lg ">
                <div class="no-jobs text-center flex flex-col justify-center items-center">
                    <img src="./jobs.png" alt="No Job Picture">
                    <h3 class="text-[#002C5C] font-semibold text-2xl">No jobs available</h3>
                    <p class="text-gray-500">Check back soon for new job opportunities</p>
                </div>
</div>
    `
}