class HubsDatatable
  delegate :params, :link_to, :number_to_currency, to: :@view

  def initialize(view)
    @view = view
  end

  def as_json(options = {})
    {
        sEcho: params[:sEcho].to_i,
        iTotalRecords: Hub.count,
        iTotalDisplayRecords: hubs.total_entries,
        aaData: data
    }
  end

  private

  def data
    hubs.map do |hub|
      [
          hub.id,
          link_to(hub.name, hub),
          ERB::Util.h(hub.path),
          ERB::Util.h(hub.created_at.strftime("%B %e, %Y"))
      ]
    end
  end

  def hubs
    @hubs ||= fetch_hubs
  end

  def fetch_hubs
    hubs = Hub.order("#{sort_column} #{sort_direction}")
    hubs = hubs.page(page).per_page(per_page)
    if params[:sSearch].present?
      hubs = hubs.where("name like :search or path like :search", search: "%#{params[:sSearch]}%")
    end
    hubs
  end

  def page
    params[:iDisplayStart].to_i/per_page + 1
  end

  def per_page
    params[:iDisplayLength].to_i > 0 ? params[:iDisplayLength].to_i : 10
  end

  def sort_column
    columns = %w[id name path created_at]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end