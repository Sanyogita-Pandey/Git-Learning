#include<iostream>
#include<vector>
using namespace std;
int main(){
vector<int>v(5);
// for(int i=0;i<5;i++){
//     cin>>v[i];
// }
v.push_back(9);
v.push_back(7);
v.push_back(8);
v.push_back(5);
v.push_back(3);
//sort(v.begin(),v.end());
for(auto it=v.begin();it!=v.end();it++){
    cout<<*it<<" ";
}
// cout<<binary_search(v.begin(),v.begin(),3);
cout<<find(v.begin(),v.begin(),3)-v.begin();
}