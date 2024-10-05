function coneVolumeAndSurfaceArea(radius, height){

    let coneVolume = Math.PI * radius ** 2 * (height / 3)
    let coneArea = Math.PI  * radius * (radius + Math.sqrt(height ** 2 + radius ** 2))

    console.log(`volume = ${coneVolume.toFixed(4)}\narea = ${coneArea.toFixed(4)}`);
}

coneVolumeAndSurfaceArea(3, 5)
coneVolumeAndSurfaceArea(3.3, 7.8)