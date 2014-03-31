# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.


$(document).on 'ready page:load', ->
  $('#hubs').dataTable
    #sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>"
    #sDom: "<'row'<'span8'l><'span8'f>r>t<'row'<'span8'i><'span8'p>>"
    #sPaginationType: "bootstrap"
    #bjQueryUI: true
    #sPaginationType: "full_numbers"
    #bProcessing: true
    #bServerSide: true
    bScrollInfinite: true,
    #bScrollCollapse: true,
    #sScrollY: "200px",
    sAjaxSource: $('#hubs').data('source')

#$(document).ready ->
#  $('#hubs').dataTable
#    "sDom": "<'row'<'span8'l><'span8'f>r>t<'row'<'span8'i><'span8'p>>"

