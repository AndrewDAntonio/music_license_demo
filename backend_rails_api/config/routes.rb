Rails.application.routes.draw do
  resources :played_tracks
  resources :artists
  resources :venues
  resources :tracks
  resources :licenses
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
