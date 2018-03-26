import transformer from './';

it('es6 to es5', () => {
  expect(transformer.process('() => {}')).toMatchSnapshot();
});

it('ES Modules', () => {
  expect(transformer.process('import a from "./a"; a();')).toMatchSnapshot()
})
