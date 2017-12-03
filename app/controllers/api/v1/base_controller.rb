#base_controller.rb

class Api::V1::BaseController < ApplicationController
  # will ensure that all actions within controllers that inherit
  # from this controller will respond only to JSON
  respond_to :json

  rescue_from Exception do |exception|
    render json: { errors: exception.to_s }.to_json, status: :bad_request
  end
end
