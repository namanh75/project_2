function websiteVisit(response){
    document.querySelector('.views').textContent=response.value
}
function checkClass(e){
    console.log(e);
    var btn1Element=document.querySelector(`.handle${e} .btn-1`)
    var scheduleDetailElement = document.querySelector(`.handle${e} .schedule-detail`)
    btn1Element.onclick = function(e){
        if(scheduleDetailElement.style.display=='none'){
            Object.assign(scheduleDetailElement.style, {
                display: 'block',
            })
            e.target.innerHTML='Less'
        }
        else{
            Object.assign(scheduleDetailElement.style, {
                display: 'none',
            })
            e.target.innerHTML='Detail'
        }
    }
    
        
    var clearScheduleElemntent = document.querySelector(`.handle${e} .clear-schedule`)
    var btn2Element = document.querySelector(`.handle${e} .btn-2`)
    btn2Element.onclick = function(e){
        Object.assign(clearScheduleElemntent.style,{
            display: 'block',
            transition: 'all 0.2s'
        })
    }

    var clear2Element = document.querySelector(`.handle${e} .clear-2`)
    clear2Element.onclick = function(e){
        Object.assign(clearScheduleElemntent.style,{
            display: 'none',
            transition: 'all 0.2s'
        })   
    }
}


