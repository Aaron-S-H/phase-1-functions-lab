// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hQ = 42;
    if(location > 42){
    console.log(location - hQ);
    return location - hQ;
}else{
    console.log(hQ - location);
    return hQ - location;
}
}
function distanceFromHqInFeet(location) {
    console.log(distanceFromHqInBlocks(location) * 264);
    return  distanceFromHqInBlocks(location) * 264;

}
function distanceTravelledInFeet(start, destination) {
     if (start > destination){
       let distance = (start - destination) * 264;
       console.log(distance);
       return distance;
     } else { 
        let distance = (destination - start) * 264;
        console.log(distance);
        return distance;

     }
    }

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if(feet < 400) {
        console.log(0);
        return 0;
    }
    else if(feet > 400 && feet <=2000){
        let totalFeet = distanceTravelledInFeet(start, destination);
        let discount = feet - 400;
        console.log((discount * 2) / 100 );
        return (discount * 2) / 100;
    } else if (feet > 2000 && feet < 2500) {
    return 25;
         } else{
            console.log('cannot travel that far');
            return 'cannot travel that far'; 
         }
}
