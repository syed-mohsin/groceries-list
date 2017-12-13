class Api::V1::ItemsController < Api::V1::BaseController
  before_action :set_item, only: [:update, :destroy]

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
    params.fetch(:item, {}).permit(:content, :price, :is_completed)
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
