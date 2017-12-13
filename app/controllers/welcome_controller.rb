class WelcomeController < ApplicationController
  def index
    lists = List.all
    @props = {
      list: {
        items: lists.as_json(include: :items),
      }
    }
  end

  def show
    list = List.find(params[:id])
    items = list.items

    @props = {
      list: {
        listData: list,
        items: items,
      }
    }
  end
end
