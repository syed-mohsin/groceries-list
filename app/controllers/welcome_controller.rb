class WelcomeController < ApplicationController
  def index
    lists = List.all
    @props = {
      lists: {
        lists: lists.as_json(include: :items),
        editListId: nil,
        editMessage: '',
        deleteMessage: '',
      }
    }
  end
end
