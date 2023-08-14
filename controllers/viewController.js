exports.getOverview = (req, res) => {
    // 1）Get tour data from collection
    
    // 2）Build template
    // 3）Render that template using tour data from 1)

    res.status(200).render('overview',{
        title: 'All Tours'
    });
}

exports.getTour = (req, res) => {
    res.status(200).render('base',{
        tour:'The Forest Hiker',
        user:'Yuimorii'
    });
}