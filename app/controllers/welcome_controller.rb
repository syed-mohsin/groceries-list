class WelcomeController < ApplicationController
  def index
    lists = List.all
    @props = {
      lists: {
        lists: lists.as_json(include: :items),
        editListId: nil,
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
