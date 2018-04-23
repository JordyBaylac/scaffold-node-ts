# what is this?

A minimalist example of a *NodeJS* tcp server. Using *Typescript*,
*Mocha* for testing, *N-API* for native development. 

## Options available (**see package.json**)
1. **npm run build-cpp**  *will build the native code and put it inside a folder named build/*
2. **npm run build**      *will run the typescript compiler and put the result in the folder dist/*
3. **npm run start**      *will run the node server generated in the above command*
4. **npm run dev**        *will run the typescript compiler and will run the \*.ts files instead of \*.js*
5. **npm run prod**       *will run steps 2 and 3*
6. **npm run test**       *run step 2 and call mocha to test every \*.spec.js file*
7. **npm run test-ts**    *the same that above but testing over the \*.ts files, not the generated \*.js*
8. **npm run debug**      *run the debugger*

# packages instaled

**global packages**
```     
            npm install -g typescript  
            npm install -g ts-node
```

**local packages (Development)**
```     
            npm install -D typescript
            npm install -D ts-node
            npm install -D mocha
            npm install --save  @types/node  
            npm install --save  @types/mocha            
```


# important references

## about typescript + node

* https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
* https://blog.sourcerer.io/a-crash-course-on-typescript-with-node-js-2c376285afe1
* https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a
* http://www.cross-platform-blog.com/tools/nodejs/typescript/visual-studio-code-nodejs-with-typescript-and-debugging/

        
## about types for typescript

* https://github.com/DefinitelyTyped/DefinitelyTyped


## about testing

* https://www.hossambarakat.net/2017/06/01/running-mocha-with-typescript/
* https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
* https://www.npmjs.com/package/mocha-typescript


## about n-api

* https://hackernoon.com/n-api-and-getting-started-with-writing-c-addons-for-node-js-cf061b3eae75
* need Python2.7
* npm install --global --production windows-build-tools
* npm install -g node-gyp
* run with: node-gyp configure build, it will generate the necessary code inside the build/ folder.

