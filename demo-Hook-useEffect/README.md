# React_JS
// Use of useEffect Hook

  // 1st varient: once the UI render firstly and then each time UI re-renders
  // useEffect(() => {
  //   console.log('this is use-effect');
  // });

  // 2nd varient: only when the UI render firstly
  // useEffect(() => {
  //   console.log('the UI is renderd');
  // }, []);

  // 3rd varient: once the UI render firstly and then each time value of text changes
  // useEffect(() => {
  //   console.log('change is detected and useEffect');
  // }, [text]);

   // varient 4: firtly UI render and to remove/unmount component
  useEffect(() => {
    console.log('eventlistner added');

    return () => {
      console.log('old eventlistner removed');
    }
  }, [text]);
  