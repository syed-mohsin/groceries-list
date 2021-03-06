class Api::V1::ItemsController < Api::V1::BaseController
  before_action :set_item, only: [:update, :destroy]

  def index
    items = Item.where(query_params)
    render json: items
  end

  def create
    list = List.find(params[:id])
    item = list.items.build(item_params)

    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
    render json: @item
  end

  private
  def item_params
    params.fetch(:item, {}).permit(:content, :price, :is_completed, :is_in_main_list)
  end

  def query_params
    params.permit(:is_in_main_list)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
