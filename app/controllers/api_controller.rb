class ApiController < ApplicationController


  def index
    posts = Post.all
  end

  def show
    post = Post.find(params[:id])
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render error: {errors: errors}, status code: 422
    end
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render json: post
    else
      render error: {errors: errors}, status code: 422
    end
    
  end

  def edit
  end

  def destroy
  end

  
end
