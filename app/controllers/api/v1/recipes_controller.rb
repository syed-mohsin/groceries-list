class Api::V1::RecipesController < Api::V1::BaseController
  before_action :set_recipe, only: [:show, :update, :destroy]

  def index
    recipes = Recipe.all
    render json: recipes, include: [:steps, :ingredients]
  end

  def create
    recipe = Recipe.new(recipe_params)
    if recipe.save
      render json: recipe, include: [:steps, :ingredients]
    else
      render json: { errors: recipe.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: @recipe, include: [:steps, :ingredients]
  end

  def update
    if @recipe.update(recipe_params)
      render json: @recipe, include: [:steps, :ingredients]
    else
      render json: { errors: @recipe.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe.destroy
    render json: @recipe
  end

  private
  def recipe_params
    params.fetch(:recipe, {}).permit(:name, :notes, :prep_time)
  end

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end
end
