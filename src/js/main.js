(function() {
    'use strict';
    var $ = global.jQuery = require('jquery');
    require('bootstrap');

    // // Load Highcharts 
    // var Highcharts = require('highcharts');
     
     
    // // Generate the chart 
    // var chart = new Highcharts.Chart({
    //   chart: {
    //     renderTo: 'container'
    //   },
    //   // ... more options - see http://api.highcharts.com/highcharts 
    // });
    

})();

$( document ).ready(function() {

    $('.main').onepage_scroll({
       sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
       easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
       animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
       pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
       updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
       beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
       afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
       loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
       keyboard: true,                  // You can activate the keyboard controls
       responsiveFallback: 600,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
       direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    });

    var $siri_ios9 = document.getElementById('siri-container');
    var $width = parseInt($(document).width(), 10) - 40; 
    
    var SW9 = new SiriWave({
      width: $width,
      height: 85,
      speed: 0.1,
      amplitude: 1,
      container: $siri_ios9,
      autostart: true,
      color: '#000',
    });


    $('#chart-container').highcharts({
        credits: {
            enabled: false
        },
        title: {
            text: 'Indoor vs. Outdoor'
        },
        subtitle: {
            text: 'Downstairs Thermostat'
        },
        xAxis: {
            categories: ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM']
        },
        yAxis: {
            title: {
                text: 'Temperature (°F)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°F'
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Indoor',
            data: [68, 67.5, 68, 67.5, 67.5, 68, 68.9, 71.5, 72, 72, 71.8, 71.9, 72, 71.5, 70, 69.8, 69.9, 70, 69.8, 69.9, 70, 70.9, 71.9, 71.7],
            color: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, 'rgb(255,20,0)'],
                    [1, 'rgb(233,236,0)']
                ],
                fallback: 'rgb(255,20,0)'
            },
            lineWidth: 5,
            states: {
                hover: {
                    enabled: true,
                    lineWidth: 5
                }
            },
            type: 'spline'
        }, {
            name: 'Outdoor',
            data: [52, 56, 60, 62, 62, 63, 62, 62, 60, 58, 57, 55, 53, 51, 49, 47, 45, 45, 45, 45, 46, 48, 49, 50],
            color: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, 'rgb(41,141,255)'],
                    [1, 'rgb(24,20,162)']
                ],
                fallback: 'rgb(41,141,255)'
            },
            lineWidth: 5,
            states: {
                hover: {
                    enabled: true,
                    lineWidth: 5
                }
            },
            type: 'spline'
        }, {
            name: 'Setpoint',
            data: [68, 68, 68, 68, 68, 68, 72, 72, 72, 72, 72, 72, 72, 70, 70, 70, 70, 70, 70, 70, 70, 72, 72, 68],
            dashStyle: 'shortdash',
            color: '#00A550',
            type: 'spline'
        }]
    });


});


