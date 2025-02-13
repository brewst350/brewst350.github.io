$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
       createPlatform(250, 650, 55, 25, "#810000")
       createPlatform(425, 590, 25, 20, "orange")
       createPlatform(425, 470, 20, 20, "orange")
       createPlatform(575, 450, 50, 60, "orange")
       createPlatform(975, 600, 70, 35, "yellow")
       createPlatform(975, 620, 30, 195, "yelllow")
       createPlatform(975, 1, 20, 475,"red")
       createPlatform(1250, 1, 20, 650,"red")
       createPlatform(1380, 620, 20, 20,"red")
       createPlatform(1380, 500, 20, 20, "red")
       createPlatform(1380, 380, 20, 20,"orange")
       createPlatform(1380,260, 20, 20, "yellow")
       createPlatform(1200, 500, 50, 20, "#E5B80B")
       createPlatform(990, 450, 60, 20, "#E5B80B")
       createPlatform(1200, 350, 50, 20, "#E5B80B")
       createPlatform(990, 290, 50, 20, "#E5B80B")
       createPlatform(1200, 200, 50, 20, "#E5B80B")
       



    // TODO 3 - Create Collectables
    createCollectable( "diamond", 1205, 75);
    createCollectable( "steve", 1025, 700);
    createCollectable("database", 1350, 50);


    
    // TODO 4 - Create Cannons
    createCannon("top", 350, 1000,)
    createCannon("right", 800, 1700)
    createCannon("top", 1285, 1950)
    createCannon("top", 1080, 3250)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
