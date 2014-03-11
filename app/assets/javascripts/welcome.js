$(document).ready(function(){

  Screencast = Backbone.Model.extend({
    url : function (){
        return "/videos/" + this.get("id") + ".json";
    }
  });
  var screencast = new Screencast();
  screencast.url = "/videos/2.json";

  screencast.fetch({
    success : function(){
      //view = new ScreencastView({model : screencast});
      //$("ul.screencasts").append(view.render());
    }
  })

  //--------------
  var Screencasts = Backbone.Collection.extend({
    model : Screencast
  });
  var screencasts = new Screencasts();

  screencasts.url = "/videos.json";
  screencasts.fetch({
    success : function(){
      _.each(screencasts.models, function(model){
        view = new ScreencastView({model : model});
        if (model.get("watched") == true){
          $(view.el).addClass("watched");
        }
        $("ul.screencasts").append(view.render());
      });
    }
  });


  //---------------
  var ScreencastView = Backbone.View.extend({
    tagName : "li",
    events : {
      "click" : "toggleWatched"
    },

    toggleWatched : function(){
      if (this.model.get("watched") == true){
        this.model.set({ 'watched' : false}).save();
      }else{
        this.model.set({ 'watched' : true}).save();
      }
      $(this.el).toggleClass("watched");
    },
    render : function(){
      // calling the passed model
      return $(this.el).text(this.model.get("title"));
    }
  });


});
