class WelcomeController < ApplicationController
  def index
    lists = List.all
    @props = {
      list: {
        listData: {},
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

  def show_main
    items = Item.where(is_in_main_list: true)

    @props = {
      list: {
        listData: {},
        items: items,
      }
    }
  end
end
