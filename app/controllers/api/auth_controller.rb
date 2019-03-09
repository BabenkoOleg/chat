module Api
  class AuthController < BaseController
    include Authenticatable

    skip_before_action :authenticate, only: [:create]

    # POST /api/auth
    def create
      user = User.find_by(nickname: params[:user][:nickname])

      if user.present? && user.authenticate(params[:user][:password])
        render_user_credentials(user)
      else
        render json: { error: 'Invalid nickname or password' }, status: 422
      end
    end
  end
end
