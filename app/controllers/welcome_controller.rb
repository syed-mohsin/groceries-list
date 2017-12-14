class WelcomeController < ApplicationController
  def index
    lists = List.all
    recipes = Recipe.all

    @props = {
      list: {
        listData: {},
        items: lists.as_json(include: :items),
      },
      recipes: {
        listData: {},
        items: recipes.as_json(include: [:steps, :ingredients]),
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
      },
    }
  end

  def show_main
    query = { is_in_main_list: true }
    items = Item.where(query)

    @props = {
      list: {
        listData: {},
        items: items,
      }
    }
  end
end
