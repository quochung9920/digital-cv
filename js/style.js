
let isValidEmail = function(val) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(val);
}


function changeFormInfo() {
    const form = document.getElementById("personal-info-form");
    const formInfo = document.getElementById("personal-info-content");
    const formEmail = document.getElementById("form-email");
    if(isValidEmail(formEmail.value)){
        if (!form.classList.contains("d-none")) {
            form.classList.add("d-none");
            formInfo.classList.remove("d-none");
        }
    } else {
        alert("Please enter a valid email address");
    }
}



function viewMoreInfo() {
    const jobInfo = document.getElementsByClassName("job-info");
    for (let i = 0; i < jobInfo.length; i++) {
        const jobInfoContent = jobInfo[i].querySelector(".job-info-content");
        const buttonViewMore = jobInfo[i].querySelector(".job-info-viewmore");
        buttonViewMore.addEventListener("click", function () {
            jobInfoContent.classList.toggle("d-none");
            if (buttonViewMore.innerHTML === `<span class="arrow-down me-2"></span>View more`) {
                buttonViewMore.innerHTML = `<span class="arrow-up me-2"></span>View less`;
                if(document.body.clientWidth > 992){
                    jobInfo[i].firstElementChild.classList.add("h-100");
                }
            } else {
                buttonViewMore.innerHTML = `<span class="arrow-down me-2"></span>View more`;
                if(document.body.clientWidth > 992){
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
    console.log(document.body.clientWidth);
}


