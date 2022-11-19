

function changeFormInfo() {
    const form = document.getElementById("personal-info-form");
    const formInfo = document.getElementById("personal-info-content");
    if (!form.classList.contains("d-none")) {
        form.classList.add("d-none");
        formInfo.classList.remove("d-none");
    }
}



function viewMoreInfo() {
    const jobInfo = document.getElementsByClassName("job-info");
    for (let i = 0; i < jobInfo.length; i++) {
        console.log(jobInfo[i].firstElementChild);
    }

    for (let i = 0; i < jobInfo.length; i++) {
        const jobInfoContent = jobInfo[i].querySelector(".job-info-content");
        const buttonViewMore = jobInfo[i].querySelector(".job-info-viewmore");
        buttonViewMore.addEventListener("click", function () {
            jobInfoContent.classList.toggle("d-none");
            if (buttonViewMore.innerHTML === `<span class="arrow-down me-2"></span>View more`) {
                buttonViewMore.innerHTML = `<span class="arrow-up me-2"></span>View less`;
                if(screen.width > 992){
                    jobInfo[i].firstElementChild.classList.add("h-100");
                }
            } else {
                buttonViewMore.innerHTML = `<span class="arrow-down me-2"></span>View more`;
                if(screen.width > 992){
                    jobInfo[i].firstElementChild.classList.remove("h-100");
                }
            }
        })
    }
}

function hoverJobInfo() {
    const jobInfo = document.getElementsByClassName("job-info");
    for (let i = 0; i < jobInfo.length; i++) {
        const jobInfoContent = jobInfo[i].querySelector(".job-info-content");
        const buttonViewMore = jobInfo[i].querySelector(".job-info-viewmore");
        jobInfo[i].addEventListener("mouseover", function () {
            if (jobInfoContent.classList.contains("d-none")) {
                buttonViewMore.classList.remove("d-none");
            }
        })
        jobInfo[i].addEventListener("mouseout", function () {
            if (jobInfoContent.classList.contains("d-none")) {
                buttonViewMore.classList.add("d-none");
            }
        })
    }
}




window.onload = function () {
    viewMoreInfo();
    hoverJobInfo();
}


