class BartSimpsonsController < ApplicationController
  def these
    ben_pohl = "Surfer Shirt" 
    colton_lastName = false 
    henryDoan = [1, 2, 3, 4]

    render json: {first: ben_pohl, second: colton_lastName, third: henryDoan}
  end

  def index
    star_wars = HTTParty.get('https://swapi.co/api/people/')
    render json: star_wars
  end

  def be
    instagram = HTTParty.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=', {
      query: {
        access_token: ENV['INSTAGRAM_SERVICE_TOKEN'],
        count: '8'
      }
    })
    render json: instagram
  end

  def actions
  end


end
