Rails.application.routes.draw do
  root 'pages#index'

  ### API Routes
  # namespace :api do
  #   namespace :v1 do
  #     resources :recipes, param: :slug
  #   end
  # end

  ### Frontend React Routes
  match '*path', to: 'pages#index', via: :all
end
