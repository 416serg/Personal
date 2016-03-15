let pathFor = ( path, params ) => {
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  return FlowRouter.path( path, params, query );
};

let urlFor = ( path, params ) => {
  return Meteor.absoluteUrl( pathFor( path, params ) );
};

let currentRoute = ( route ) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};

FlowRouter.route('/', {
  name: 'home',
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <HomeLayout />,
      }
    );
  },
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <About />,
      }
    );
  },
});

FlowRouter.route('/work', {
  name: 'work',
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <Work />,
      }
    );
  },
});

FlowRouter.route('/contact', {
  name: 'contact',
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <Contact />,
      }
    );
  },
});

FlowRouter.notFound = {
  name: 'notFound',
  triggersEnter: [],
  action() {
    ReactLayout.render(MainLayout, 
      { 
        content: <NotFound />
      }
    );
  }
};