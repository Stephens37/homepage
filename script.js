function multipleProjects () {
    for (let i = 0; i < 3; i++) {
        let originalGCL = document.getElementById('original-gc')
        const clone = originalGCL.cloneNode(true)
        document.querySelector('.flex-container-layout').appendChild(clone)
        console.log(i)
    }
}

multipleProjects()

/*
want to create an identical gcl based off of its original
start by defining gcl and giving it a variable
then create a loop that will copy the variable 3 times
create the element with originalGCL = document.createElement('div')
*/