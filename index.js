// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock){
    const hqBlock=42
    return Math.abs(hqBlock-pickupBlock)

}

 function distanceFromHqInFeet(pickupBlock) {
  distanceFromHqInBlocks()
  const hqBlock=42
  const blockInFeet=264
  return Math.abs(hqBlock-pickupBlock)*264
}
  function distanceTravelledInFeet(pickupBlock1,pickupBlock2) {
    return Math.abs (pickupBlock2-pickupBlock1)*264
    
  }
  function calculatesFarePrice(pickupBlock1, pickupBlock2) {
  // Calculate distance in feet
  const Distance = Math.abs(pickupBlock1 - pickupBlock2) * 264;

  if (Distance <= 400) {
    return 0;  // Free for first 400 feet
  } else if (Distance > 400 && Distance <= 2000) {
    return (Distance - 400) * 0.02
  } else if (Distance > 2000 && Distance <= 2500) {
    return 25 
  } else {
    return 'cannot travel that far'
  }
}

