(function() {
    var images;

    images = ["https://source.unsplash.com/featured/?mountains", "https://source.unsplash.com/featured/?hiking", "https://source.unsplash.com/featured/?kayak", "https://source.unsplash.com/featured/?forest", "https://source.unsplash.com/featured/?mountain", "https://source.unsplash.com/featured/?trail", "https://source.unsplash.com/featured/?outdoors", "https://source.unsplash.com/featured/?norway"];

    $('div.card-image').each(function() {
        var random_image_index;
        random_image_index = Math.floor(images.length * Math.random());
        return $(this).css('background-image', 'url(' + images[random_image_index] + ')');
    });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxDQUNQLGlEQURPLEVBRVAsOENBRk8sRUFHUCw2Q0FITyxFQUlQLDhDQUpPLEVBS1AsZ0RBTE8sRUFNUCw2Q0FOTyxFQU9QLGdEQVBPLEVBUVQsOENBUlM7O0VBV1QsQ0FBQSxDQUFFLGdCQUFGLENBQW1CLENBQUMsSUFBcEIsQ0FBeUIsUUFBQSxDQUFBLENBQUE7QUFDdkIsUUFBQTtJQUFBLGtCQUFBLEdBQXFCLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUEzQjtXQUNyQixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDLE1BQUEsR0FBUyxNQUFPLENBQUEsa0JBQUEsQ0FBaEIsR0FBc0MsR0FBdEU7RUFGdUIsQ0FBekI7QUFYQSIsInNvdXJjZXNDb250ZW50IjpbImltYWdlcyA9IFtcbiAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vZmVhdHVyZWQvP21vdW50YWluc1wiLFxuICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9mZWF0dXJlZC8/aGlraW5nXCIsXG4gIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2ZlYXR1cmVkLz9rYXlha1wiLFxuICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9mZWF0dXJlZC8/Zm9yZXN0XCIsXG4gIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2ZlYXR1cmVkLz9tb3VudGFpblwiXG4gIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2ZlYXR1cmVkLz90cmFpbFwiXG4gIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2ZlYXR1cmVkLz9vdXRkb29yc1wiXG5cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9mZWF0dXJlZC8/bm9yd2F5XCJcbl1cblxuJCgnZGl2LmNhcmQtaW1hZ2UnKS5lYWNoIC0+XG4gIHJhbmRvbV9pbWFnZV9pbmRleCA9IE1hdGguZmxvb3IoaW1hZ2VzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXG4gICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgaW1hZ2VzW3JhbmRvbV9pbWFnZV9pbmRleF0gKyAnKScpIl19
//# sourceURL=coffeescript