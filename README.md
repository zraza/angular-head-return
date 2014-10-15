angular-head-return is a super simple angular directive that react to the user's scroll and hide/show itself (ideally page header) depending on scroll direction.

### Usage

The usage is super simple, drop the JavaScript in your page, add zanbeel as your dependencies and add head-return directive in your header wrapper, with no other dependencies.

```JavaScript
angular.module('app', ['zanbeel']);

```

```html
<header head-return>
    <!-- Your Header Contents -->
</header>
```

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
