Rails.application.routes.draw do

  namespace :api do
    post '/auth', to: 'auth#create'
    resources :users, only: [:create]
  end

  root to: 'spa#index'
  get '/*path', to: 'spa#index', format: false
end
