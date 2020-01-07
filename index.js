function wakeDog(dogName,dogBreed){
    let result =`Wake ${dogName} the ${dogBreed}`
    console.log(`Wake ${dogName} the ${dogBreed}`)
    return result
}
function leashDog(dogName,dogBreed){
    let result=`Leash ${dogName} the ${dogBreed}`
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return result
}
function walkToPark(dogName,dogBreed){
    let result=`Walk to the park with ${dogName} the ${dogBreed}`
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return result
}
function throwFrisbee(dogName,dogBreed){
    let result=`Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return result
}
function walkHome(dogName,dogBreed){
    let result=`Walk home with ${dogName} the ${dogBreed}`
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return result
}
function unleashDog(dogName,dogBreed){
    let result=`Unleash ${dogName} the ${dogBreed}`
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return result
}

let routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName,dogBreed){
    let newArray=[]
    for(let i=0;i<routine.length;i++){
        newArray.push(routine[i](dogName,dogBreed))
    }
    return newArray
}