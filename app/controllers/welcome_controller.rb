class WelcomeController < ApplicationController
  def index
    lists = List.all
    @props = {
      items: {
        items: lists.as_json(include: :items),
        editItemId: nil,
        message: ''
      }
    }
  end

  def show
    list = List.find(params[:id])
    items = list.items

    @props = {
      items: {
        list: list,
        items: items,
        editItemId: nil,
        message: ''
      }
    }
  end
end
