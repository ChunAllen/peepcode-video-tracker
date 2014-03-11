class VideosController < ApplicationController
  respond_to :json

  def index
    @videos = Video.all
    respond_with @videos
  end


  def show
    @video = Video.find(params[:id])
    respond_with @video
  end


  def update
    @video = Video.find(params[:id])
    if [true, false, "true", "false"].include? params[:watched]
      @video.update_attributes(watched: params[:watched])
      respond_with @video
    else
      render nothing: true, status: 304 #not modified
    end
  end

end
