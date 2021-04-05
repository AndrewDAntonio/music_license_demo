Rails.application.routes.draw do
  resources :played_tracks
  resources :tracks
  resources :artists
  resources :venues
  resources :licenses

  post "/login", to: "auth#login"
  post "/logout", to: "auth#logout"
  get "/autologin", to: "auth#autologin"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
