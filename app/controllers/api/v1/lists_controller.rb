class Api::V1::ListsController < Api::V1::BaseController
  before_action :set_list, only: [:show, :update]

  def index
    lists = List.all
    render json: lists, include: :items
  end

  def create
    list = List.new(list_params)
    if list.save
      render json: list, include: :items
    else
      render json: { errors: list.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: @list, include: :items
  end

  def update
    if @list.update(list_params)
      render json: @list, include: :items
    else
      render json: { errors: @list.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
    render json: @list
  end

  private
  def list_params
    params.fetch(:list, {}).permit(:name)
  end

  def set_list
    @list = List.find(params[:id])
  end
end
