class WelcomeController < ApplicationController
  def index
    lists = List.all
    @props = { lists: lists.as_json(include: :items) }
  end
end
