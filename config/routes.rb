Rails.application.routes.draw do
 
  namespace :api do
    resources :api
  end

  get 'matthew_is_teaching', :to => 'bart_simpsons#these'
  get 'star_trek_is_cooler', :to => 'bart_simpsons#index'  
  get 'get_them_photos', :to => 'bart_simpsons#be'
  
  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end
