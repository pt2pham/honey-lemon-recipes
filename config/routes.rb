Rails.application.routes.draw do
  ### API Routes
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      get 'show/:id', to: 'recipes#show'
      delete '/destroy/:id', to: 'recipes#destroy'
    end
  end

  root 'pages#index'

  ### Frontend React Routes
  match '*path', to: 'pages#index', via: :all
end
